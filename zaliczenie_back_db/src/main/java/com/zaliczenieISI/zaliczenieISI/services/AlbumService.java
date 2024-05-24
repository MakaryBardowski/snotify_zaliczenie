package com.zaliczenieISI.zaliczenieISI.services;

import com.zaliczenieISI.zaliczenieISI.domain.Album;
import com.zaliczenieISI.zaliczenieISI.repositories.AlbumRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumService {
    private final AlbumRepository albumRepository;
    public AlbumService(AlbumRepository albumRepository){
        this.albumRepository = albumRepository;
    }

    public Album findById(long id){
        return albumRepository.findById(id).get();
    }

    public List<Album> findAll(){
        return albumRepository.findAll();
    }
}
