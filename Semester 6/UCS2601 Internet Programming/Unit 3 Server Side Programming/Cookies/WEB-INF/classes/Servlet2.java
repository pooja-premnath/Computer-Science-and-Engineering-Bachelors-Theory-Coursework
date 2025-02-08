import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class Servlet2 extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException,ServletException{
        PrintWriter out= res.getWriter();

        

        Cookie ck[]= req.getCookies();
        
        
        out.println("<h1> Hi" + ck[0].getValue() + "</h1>");
    }
}