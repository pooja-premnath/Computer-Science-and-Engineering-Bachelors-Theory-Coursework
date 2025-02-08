import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class Database extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter out = null;
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            res.setContentType("text/html");
            out = res.getWriter();

            String roll = req.getParameter("roll");

            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/marks", "pooja", "pooja");

            ps = con.prepareStatement("select * from students where roll = ?");
            ps.setInt(1, Integer.parseInt(roll));

            rs = ps.executeQuery();

            out.println("<html>");
            if (rs.next()) {
                out.println("<h1>" + rs.getString(1) + " " + rs.getString(2) + " " + rs.getString(3) + "</h1>");
            } else {
                out.println("<h1>No student found with roll number: " + roll + "</h1>");
            }
            out.println("</html>");
        } catch (Exception e) {
            if (out != null) {
                out.println("<html><body><h1>Error: " + e.getMessage() + "</h1></body></html>");
            }
            e.printStackTrace();
        } 
    }
}
