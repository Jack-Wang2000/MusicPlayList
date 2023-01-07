package com.OnegJack.Music.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="user")
@Data
@NoArgsConstructor
public class User {
    @Id
    private String phoneNum;
    @Column
    private String name;
    @Column
    private String passwd;
    @Column
    private String picURL;
}
