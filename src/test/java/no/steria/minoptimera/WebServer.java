package no.steria.minoptimera;


import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

public class WebServer {

    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        WebAppContext handler = new WebAppContext("src/main/webapp", "/");
        //handler.setContextPath("");
        String testwebxml = new WebServer().getClass().getClassLoader().getResource("testweb.xml").getFile();
        handler.setOverrideDescriptor(testwebxml);
        server.setHandler(handler);
        server.start();
        System.out.println("http://localhost:8080/");
    }

}
