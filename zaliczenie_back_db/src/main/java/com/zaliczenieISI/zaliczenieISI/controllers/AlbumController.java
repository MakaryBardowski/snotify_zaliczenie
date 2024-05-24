package com.zaliczenieISI.zaliczenieISI.controllers;


import com.zaliczenieISI.zaliczenieISI.domain.Album;
import com.zaliczenieISI.zaliczenieISI.domain.RemoteAlbumDto;
import com.zaliczenieISI.zaliczenieISI.services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/albums/")
public class AlbumController {

    private final AlbumService albumService;

    @Autowired
    private RestTemplate restTemplate;

    public AlbumController(AlbumService albumService){
        this.albumService = albumService;
    }

    @GetMapping("all")
    public List<Album> findById(){
        return albumService.findAll();
    }

    @GetMapping("{id}")
    public Album findById(@PathVariable long id){
        return albumService.findById(id);
    }


    @GetMapping("remote/{id}")
    public RemoteAlbumDto fetchRemoteAlbum(@PathVariable long id){
        return restTemplate.getForObject(
                "https://jsonplaceholder.typicode.com/albums/"+id, RemoteAlbumDto.class);
    }
}
