package ng.queue.executor.match.notification;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MatchUserCronExeAPI
 */
@WebServlet("/MatchUserCronExeAPI")
public class MatchUserCronExeAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MatchUserCronExeAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Executor exe = new Executor();
		
		String result = exe.matchUserNotiExe();

		response.getWriter().append("'result' : '"+result+"'");
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}



}
