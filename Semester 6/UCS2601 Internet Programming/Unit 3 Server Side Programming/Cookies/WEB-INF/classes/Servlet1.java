import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class Servlet1 extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException,ServletException{
        PrintWriter out= res.getWriter();

        var n=req.getParameter("name");

        Cookie ck= new Cookie("name",n);
        res.addCookie(ck);
        
        out.println("<a href='Servlet2'>Go to Servlet 2</a>");
    }
}