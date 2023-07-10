package com.example.MainApp.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserFilter extends GenericFilterBean{

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;

        String header = httpServletRequest.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer")) {
            throw new ServletException("Token is missing");
        } else {
            String token = header.substring(7);
            Claims claims = Jwts.parser().setSigningKey("SecretUserKey").parseClaimsJws(token).getBody();

            httpServletRequest.setAttribute("Email", claims.get("Email"));
            httpServletRequest.setAttribute("Role",claims.get("Role"));
            System.out.println(claims);
        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
