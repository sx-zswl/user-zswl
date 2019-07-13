<%@ page contentType="text/html; charset=GBK" %>
<%
Thread.sleep(1000);
System.out.println(request.getParameter("name") + " ----------");
int level1 = 10;
int level2 = 10;
int level3 = 10;

StringBuilder buf = new StringBuilder();
for(int i = 0; i < level1; i++) {
	buf.append("<li><a>后来者</a>\n\t<ul>");

	for(int j = 0; j < level2; j++) {
		buf.append("<li><a>新吃肉小组</a>\n\t\t<ul>");

		for(int k = 0; k < level3; k++) {
			buf.append("<li><a tname='id' tvalue='" + i + "_" + j + "_" + k + "'>升级版吃货(" + i + "_" + j + "_" + k + " = " + (i+1)*(j+1)*(k+1) + ")</a></li>");
		}

		buf.append("</ul></li>");
	}

	buf.append("</ul>\n</li>\n");
}

out.print(buf.toString());
%>
