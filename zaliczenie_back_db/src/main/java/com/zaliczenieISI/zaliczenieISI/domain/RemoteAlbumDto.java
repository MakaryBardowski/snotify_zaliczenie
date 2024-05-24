package com.zaliczenieISI.zaliczenieISI.domain;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
public class RemoteAlbumDto {
    private Long id;
    private String title;
    private Long userId;


    public RemoteAlbumDto(Long userId, Long id, String title){
        this.userId = userId;
        this.id = id;
        this.title = title;
    }

}
