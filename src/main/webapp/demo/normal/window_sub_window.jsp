<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<base target = "_self">
<body class="lazy">

<p>���˴���ʽ���Ӵ���</p>

<a href="http://www.baidu.com" class="btn_gentle">���Ҵ򿪰ٶ�</a>
<a href="#" class="btn_gentle" onclick='HT.openWin("http://www.baidu.com");'>���Ҵ��´���</a>

<br/>

<form action="http://www.baidu.com">
<input type="submit" value="���ύ" class="btn_gentle"/>
</form>

<div class="button_bar">
	<ul>
		<li class="add"><a href="#" class="btn_gentle">����</a></li>
		<li class="delete"><a href="#" class="btn_gentle">�ύ</a></li>
		<li class="edit"><a href="${ROOT}/close.html" class="btn_gentle" >�ر�</a></li>
	</ul>
</div>


</body>

</html>
