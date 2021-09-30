let cubeRotationX = 0.0;
let cubeRotationY = 0.0;

main();

function main() {
  const canvas = document.querySelector("#glcanvas");
  const gl = canvas.getContext("webgl");

  if (!gl) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Apply lighting effect

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;

  const fragmentShadedSource = `
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
    }
  `;

  const shaderProgram = initShaderProgram(
    gl,
    vertexShaderSource,
    fragmentShadedSource
  );

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
      textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        "uProjectionMatrix"
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
      uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
    },
  };

  const buffers = initBuffers(gl);

  const texture = loadTexture(
    gl,
    "/embeds/3d-web-gl-first-steps-variables/cubetexture.png"
  );

  var then = 0;

  function render(now) {
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, texture, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function initBuffers(gl) {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const frontFacePosition = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
  const backFacePosition = [-1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1];
  const topFacePosition = [-1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1];
  const bottomFacePosition = [-1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1];
  const rightFacePosition = [1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1];
  const leftFacePosition = [-1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];

  const positions = [
    ...frontFacePosition,
    ...backFacePosition,
    ...topFacePosition,
    ...bottomFacePosition,
    ...rightFacePosition,
    ...leftFacePosition,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const frontFaceVertexNormal = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
  const backFaceVertexNormal = [0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1];
  const topFaceVertexNormal = [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
  const bottomFaceVertexNormal = [0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0];
  const rightFaceVertexNormal = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0];
  const leftFaceVertexNormal = [-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0];

  const vertexNormalsForLighting = [
    ...frontFaceVertexNormal,
    ...backFaceVertexNormal,
    ...topFaceVertexNormal,
    ...bottomFaceVertexNormal,
    ...rightFaceVertexNormal,
    ...leftFaceVertexNormal,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(vertexNormalsForLighting),
    gl.STATIC_DRAW
  );

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const squareTextureCoordinates = [0, 0, 1, 0, 1, 1, 0, 1];

  const frontFaceCoordinates = squareTextureCoordinates;
  const backFaceCoordinates = squareTextureCoordinates;
  const topFaceCoordinates = squareTextureCoordinates;
  const bottomFaceCoordinates = squareTextureCoordinates;
  const rightFaceCoordinates = squareTextureCoordinates;
  const leftFaceCoordinates = squareTextureCoordinates;

  const textureCoordinatesForFaces = [
    ...frontFaceCoordinates,
    ...backFaceCoordinates,
    ...topFaceCoordinates,
    ...bottomFaceCoordinates,
    ...rightFaceCoordinates,
    ...leftFaceCoordinates,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinatesForFaces),
    gl.STATIC_DRAW
  );

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // Each face is defined as two triangles, using the
  // indices from the vertex array to specify each triangle's
  // position.

  const frontFaceTriangles = [0, 1, 2, 0, 2, 3];
  const backFaceTriangles = [4, 5, 6, 4, 6, 7];
  const topFaceTriangles = [8, 9, 10, 8, 10, 11];
  const bottomFaceTriangles = [12, 13, 14, 12, 14, 15];
  const rightFaceTriangles = [16, 17, 18, 16, 18, 19];
  const leftFaceTriangles = [20, 21, 22, 20, 22, 23];

  const elements = [
    ...frontFaceTriangles,
    ...backFaceTriangles,
    ...topFaceTriangles,
    ...bottomFaceTriangles,
    ...rightFaceTriangles,
    ...leftFaceTriangles,
  ];

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(elements),
    gl.STATIC_DRAW
  );

  return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const opaqueGrey = [200, 200, 200, 255];
  const pixel = new Uint8Array(opaqueGrey);

  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel
  );

  const image = new Image();
  image.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image
    );

    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // No, it's not a power of 2. Turn of mips and set
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}

function drawScene(gl, programInfo, buffers, texture, deltaTime) {
  const blackOpaque = [0, 0, 0, 1];
  gl.clearColor(...blackOpaque);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfViewInRadians = (45 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100;
  const projectionMatrix = mat4.create();

  mat4.perspective(projectionMatrix, fieldOfViewInRadians, aspect, zNear, zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  const drawingPositionX = 0;
  const drawingPositionY = 0;
  const drawingPositionZ = -6;

  const startingDrawingPosition = [
    drawingPositionX,
    drawingPositionY,
    drawingPositionZ,
  ];

  mat4.translate(modelViewMatrix, modelViewMatrix, startingDrawingPosition);

  const xAxis = [0, 1, 0];
  mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotationX, xAxis);

  const yAxis = [1, 0, 0];
  mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotationY, yAxis);

  const normalMatrix = mat4.create();
  mat4.transpose(normalMatrix, normalMatrix);

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL how to pull out the texture coordinates from
  // the texture coordinate buffer into the textureCoord attribute.
  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
      programInfo.attribLocations.textureCoord,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
  }

  // Tell WebGL how to pull out the normals from
  // the normal buffer into the vertexNormal attribute.
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexNormal,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
  }

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.normalMatrix,
    false,
    normalMatrix
  );

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  const autoRotationOn = document.getElementById("autoRotation").checked;

  if (autoRotationOn === true) {
    cubeRotationX += deltaTime / 2000;
    cubeRotationY += deltaTime / 1400;
    document.getElementById("cubeRotationX").value = cubeRotationX.toFixed(1);
    document.getElementById("cubeRotationY").value = cubeRotationY.toFixed(1);
  }
  if (autoRotationOn === false) {
    cubeRotationX = document.getElementById("cubeRotationX").value / 1;
    cubeRotationY = document.getElementById("cubeRotationY").value / 1;
  }
}

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(shaderProgram)
    );
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
