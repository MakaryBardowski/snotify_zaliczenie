package com.zaliczenieISI.zaliczenieISI.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@Data
public class Album {
    @Id
    private Long id;

    private String title;

    @Column(name = "image_path")
    private String imagePath;

    public Album(Long id, String name, String imagePath){
        this.id = id;
        this.title = name;
        this.imagePath = imagePath;
    }

}
