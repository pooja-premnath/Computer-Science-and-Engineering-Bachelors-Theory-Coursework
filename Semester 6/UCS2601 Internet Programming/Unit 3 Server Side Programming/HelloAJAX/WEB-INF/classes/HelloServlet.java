import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException{
        
        PrintWriter out=res.getWriter();
        var n=req.getParameter("name");
        out.println("<h1>"+ n + "</h1>");
    }
}