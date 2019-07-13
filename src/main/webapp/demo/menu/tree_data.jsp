<%@ page contentType="text/html; charset=GBK" %>
<%
int level1 = 10;
int level2 = 10;
int level3 = 0;

StringBuilder buf = new StringBuilder();
for(int i = 0; i < level1; i++) {
	buf.append("<li><a>开发一部</a>\n\t<ul>");

	for(int j = 0; j < level2; j++) {
		buf.append("<li><a>吃肉小组</a>\n\t\t<ul lazy='true' param={name:'Roy'}>");

//		for(int k = 0; k < level3; k++) {
//			buf.append("<li><a tname='id' tvalue='" + i + "_" + j + "_" + k + "'>吃货(" + i + "_" + j + "_" + k + " = " + (i+1)*(j+1)*(k+1) + ")</a></li>");
//		}

		buf.append("</ul></li>");
	}

	buf.append("</ul>\n</li>\n");
}

out.print(buf.toString());
%>
