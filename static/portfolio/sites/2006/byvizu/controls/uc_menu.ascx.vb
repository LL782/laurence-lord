
Partial Class controls_uc_menu
    Inherits System.Web.UI.UserControl

    Dim vData As New DataClass("MSSQL02")
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        btnHome.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnHome.Attributes.Add("onmouseover", "MM_swapImage('" & btnHome.ClientID & "','','images/menu-home-ro.gif',1)")
        btnSobre.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnSobre.Attributes.Add("onmouseover", "MM_swapImage('" & btnSobre.ClientID & "','','images/menu-sobre-ro.gif',1)")
        btnCollections.Attributes.Add("onclick", String.Format("toggle(document.getElementById('{0}'));", menuCollections.ClientID))
        'onclick = "toggle(document.getElementById('menuCollections'));"
        btnCollections.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnCollections.Style.Add("cursor", "pointer")
        btnCollections.Attributes.Add("onmouseover", "MM_swapImage('" & btnCollections.ClientID & "','','images/menu-collections-ro.gif',1)")
        btnCelinha.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnCelinha.Attributes.Add("onmouseover", "MM_swapImage('" & btnCelinha.ClientID & "','','images/menu-celinha-ro.gif',1)")
        btnVizu.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnVizu.Attributes.Add("onmouseover", "MM_swapImage('" & btnVizu.ClientID & "','','images/menu-vizu-ro.gif',1)")
        btnExclusivo.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnExclusivo.Attributes.Add("onmouseover", "MM_swapImage('" & btnExclusivo.ClientID & "','','images/menu-exclusive-ro.gif',1)")
        btnModa.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnModa.Attributes.Add("onmouseover", "MM_swapImage('" & btnModa.ClientID & "','','images/menu-moda-ro.gif',1)")
        btnNews.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnNews.Attributes.Add("onmouseover", "MM_swapImage('" & btnNews.ClientID & "','','images/menu-news-ro.gif',1)")
        btnFale.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnFale.Attributes.Add("onmouseover", "MM_swapImage('" & btnFale.ClientID & "','','images/menu-fale-ro.gif',1)")
        btnComprar.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnComprar.Attributes.Add("onmouseover", "MM_swapImage('" & btnComprar.ClientID & "','','images/menu-como-ro.gif',1)")
        btnSelecao.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnSelecao.Attributes.Add("onmouseover", "MM_swapImage('" & btnSelecao.ClientID & "','','images/menu-selection-ro.gif',1)")
        btnSair.Attributes.Add("onmouseout", "MM_swapImgRestore()")
        btnSair.Attributes.Add("onmouseover", "MM_swapImage('" & btnSair.ClientID & "','','images/menu-sair-ro.gif',1)")
        'If Context.User.Identity.IsAuthenticated Then
        '    btnSair.Visible = True
        'Else
        btnSair.Visible = False
        'End If
        'Dim id As String = Context.Session.SessionID
        'Dim ds As DataSet = vData.getDataset("sp_temp_listar", id)
        'If ds.Tables(0).Rows.Count = 0 Then
        '    btnSelecao.Visible = False
        'End If
    End Sub

    Protected Sub btnHome_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnHome.Click
        Response.Redirect("Default.aspx")
    End Sub

    Protected Sub btnComprar_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnComprar.Click
        Response.Redirect("Comprar.aspx")
    End Sub

    Protected Sub btnExclusivo_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnExclusivo.Click
        Response.Redirect("Exclusive.aspx")
    End Sub

    Protected Sub btnSobre_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnSobre.Click
        Response.Redirect("Home.aspx")
    End Sub

    Protected Sub btnModa_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnModa.Click
        Response.Redirect("Namoda.aspx")
    End Sub

    Protected Sub btnSelecao_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnSelecao.Click
        Response.Redirect("Selecao.aspx")
    End Sub

    Protected Sub btnNews_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnNews.Click
        Response.Redirect("News.aspx")
    End Sub

    Protected Sub btnCelinha_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnCelinha.Click
        Response.Redirect("Colecoes2.aspx")
    End Sub

    Protected Sub btnVizu_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnVizu.Click
        Response.Redirect("Colecoes.aspx")
    End Sub

    Protected Sub btnFale_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnFale.Click
        Response.Redirect("Fale.aspx")
    End Sub

    Protected Sub btnSair_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles btnSair.Click
        FormsAuthentication.SignOut()
        Response.Redirect("Default.aspx")
    End Sub
End Class
