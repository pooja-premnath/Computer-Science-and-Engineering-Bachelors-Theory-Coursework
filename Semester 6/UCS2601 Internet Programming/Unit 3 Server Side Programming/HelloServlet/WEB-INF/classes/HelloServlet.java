import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException{
        PrintWriter out= res.getWriter();
        out.println("<html>");
        out.println("<body>");
        out.println("<h1>Hello Pooja, good work </h1>");
        out.println("</body>");
        out.println("</html>");
    }
}