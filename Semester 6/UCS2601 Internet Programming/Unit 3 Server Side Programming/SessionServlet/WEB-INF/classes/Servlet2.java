import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class Servlet2 extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException{
        PrintWriter out= res.getWriter();

        
        HttpSession session= req.getSession(false);
        String name= (String)session.getAttribute("name");

        out.println("<h1> Hi Dear"+ name + "</h1>");
    }
}