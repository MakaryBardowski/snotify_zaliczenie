package com.zaliczenieISI.zaliczenieISI.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
public class LoginEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "login_date")
    private Date loginDate;

    public LoginEvent(){
        this.loginDate = getCurrentDate();
    }

    public LoginEvent(Long id, String name){
        this.id = id;
        this.name = name;
        this.loginDate = getCurrentDate();
    }


    private java.sql.Date getCurrentDate(){
        java.util.Date utilDate = new java.util.Date();
        java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
        return sqlDate;
    }

}
