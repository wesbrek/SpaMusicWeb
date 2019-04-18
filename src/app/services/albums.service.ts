import { Injectable } from '@angular/core';

@Injectable()
export class AlbumsService {

    private albums:Album[] = [
        {
          nombre: "Audioslave",
          bio: "Audioslave is the debut studio album by American rock supergroup Audioslave. It was released on November 15, 2002, by Epic Records and Interscope Records. The album features the hit singles Cochise, Show Me How to Live, What You Are, Like a Stone, and I Am the Highway. The album was later certified 3x platinum by the Recording Industry Association of America in the United States. Like a Stone was nominated for a 2004 Grammy Award for Best Hard Rock Performance.",
          img: "assets/img/audioslave.jpg",
          fecha: "2002-11-15",
          banda:"Audioslave",
          bandaImg: "assets/img/AudioslaveBand.jpg"
        },
        {
          nombre: "Saturday Night Wrist",
          bio: "Saturday Night Wrist is the fifth studio album by American alternative metal band Deftones, released on October 31, 2006 by Maverick Records. Despite early contributions that were later scrapped, it marked the departure of mainstay Deftones producer Terry Date. It was also their last released album to feature bass player Chi Cheng before his car accident in 2008, which led to his death five years later.",
          img: "assets/img/Deftones.jpg",
          fecha: "2006-10-31",
          banda:"Deftones",
          bandaImg: "assets/img/DeftonesBand.jpg"
        },
        {
          nombre: "Is this it",
          bio: "Is This It is the debut studio album by American rock band the Strokes, released on July 30, 2001, by RCA Records. It was recorded at Transporterraum in New York City with producer Gordon Raphael from March to April 2001. For their debut, the band strived to capture a simple sound that was not significantly enhanced in the studio. Building on their 2001 EP The Modern Age, the band members molded compositions largely through live takes during recording sessions, while songwriter and lead singer Julian Casablancas continued to detail the lives and relationships of urban youth. Following its completion, the Strokes embarked on a promotional world tour before its release.",
          img: "assets/img/Is_this_it.jpg",
          fecha: "2001-07-30",
          banda: "The Strokes",
          bandaImg: "assets/img/TheStrokesBand.jpg"
        },
        {
          nombre: "Ten",
          bio: "Ten is the debut studio album by American rock band Pearl Jam, released on August 27, 1991 through Epic Records. Following the disbanding of bassist Jeff Ament and guitarist Stone Gossard's previous group Mother Love Bone, the two recruited vocalist Eddie Vedder, guitarist Mike McCready, and drummer Dave Krusen to form Pearl Jam in 1990. Most of the songs began as instrumental jams, to which Vedder added lyrics about topics such as depression, homelessness, and abuse. As of 2019, Ten has sold more than 13 million copies in United States alone and is widely regarded as one of the greatest albums to have ever been made.",
          img: "assets/img/Pearl-Jam-Ten.jpg",
          fecha: "1995-10-23",
          banda:"Pearl Jam",
          bandaImg: "assets/img/PearlJamBand.jpg"
        },
        {
          nombre: "Mellon Collie and the Infinite Sadness",
          bio: "Mellon Collie and the Infinite Sadness is the third studio album by American alternative rock band The Smashing Pumpkins, released on October 23, 1995 in the United Kingdom and a day later in the United States on Virgin Records. Produced by frontman Billy Corgan with Flood and Alan Moulder, the 28-track album was released as a two-disc CD and triple LP. The album features a wide array of styles, as well as greater musical input from bassist D'arcy Wretzky and second guitarist James Iha.",
          img: "assets/img/Smashing-Pumpinks.jpg",
          fecha: "1995-10-23",
          banda: "Smashing Pumpkins",
          bandaImg: "assets/img/SmashingPumpkinsBand.jpg"
        },
        {
          nombre: "Superunknown",
          bio: "Superunknown is the fourth studio album by American rock band Soundgarden, released on March 8, 1994, through A&M Records. It is the band's second album with bassist Ben Shepherd, and features new producer Michael Beinhorn. Soundgarden began work on the album after touring in support of its previous album, Badmotorfinger (1991). Superunknown captured the heaviness of the band's earlier releases while displaying a more diverse range of influences.",
          img: "assets/img/Superunknown.jpg",
          fecha: "1994-03-08",
          banda: "Soundgarden",
          bandaImg: "assets/img/Soundgarden.png"
        },
        {
          nombre: "Whatever People Say I Am, That's What I'm Not",
          bio: "Whatever People Say I Am, That's What I'm Not is the debut studio album by English rock band Arctic Monkeys, released on 23 January 2006 by Domino Recording Company. The album surpassed Elastica's self-titled album to become the fastest selling debut album in British music history, shifting over 360,000 copies in its first week, and remains the fastest selling debut album by a band. It has since gone quintuple platinum in the UK. It is the only album to feature Andy Nicholson as bass player before he was replaced by Nick O'Malley.",
          img: "assets/img/whatever.jpg",
          fecha: "2006-01-23",
          banda: "Arctic Monkeys",
          bandaImg: "assets/img/ArcticMonkeysBand.jpg"
        },
        {
          nombre: "Wasting Light",
          bio: "Wasting Light is the seventh studio album by American rock band Foo Fighters. It was released on April 12, 2011 on RCA Records, and is the first album to feature rhythm guitarist Pat Smear since The Colour and the Shape (1997). Wanting to capture the essence of their earlier work and avoid the artificiality of digital recording, the Foo Fighters recorded in the garage of frontman Dave Grohl in Encino, California, using only analog equipment. The sessions were produced by Butch Vig, with whom Grohl had worked on Nirvana's Nevermind.",
          img: "assets/img/wasting-ligth.png",
          fecha: "2011-04-12",
          banda: "Foo Figthers",
          bandaImg: "assets/img/FooFigthersBand.jpg"
        },
        {
          nombre: "Definitely Maybe",
          bio: "Definitely Maybe is the debut studio album by English rock band Oasis. The album was released on 29 August 1994 by Creation Records. It is the band's only studio album to feature original drummer Tony McCarroll. Definitely Maybe was an immediate commercial and critical success in the United Kingdom, having followed on the heels of the singles Supersonic, Shakermaker, and Live Forever. The album went straight to number one in the UK Albums Chart, and became the fastest-selling debut album in the UK at the time; it went on to be certified 7× Platinum (2.1 million+ sales) by the BPI. Definitely Maybe marked the beginning of Oasis' success in the United States, selling over one million copies there despite only peaking at 58 on the Billboard 200. The album went on to sell over 8 million copies worldwide and brought widespread critical acclaim.",            img: "assets/img/oasis.jpg",
          fecha: "1994-08-29",
          banda: "Oasis",
          bandaImg: "assets/img/OasisBand.jpg"
          },     
      ];


    constructor(){
          console.log("Service Ready"); 
    }
 
    getAlbums():Album[]{
        return this.albums;
    }

    getAlbum(idx : number){
        return this.albums[idx];
    }

    searchAlbums(termino:string):Album[]{
      let albumsArr:Album[] = [];
      termino = termino.toLocaleLowerCase();

      for(let i = 0; i < this.albums.length; i++){
        let album = this.albums[i];
        let name = album.nombre.toLocaleLowerCase();
        let bandName = album.banda.toLocaleLowerCase();
        if( name.indexOf( termino ) >= 0 || bandName.indexOf( termino ) >= 0){
          album.idx = i;
          albumsArr.push( album );
        }
      }
      return albumsArr;
    }
}

export interface Album{
    nombre: string
    bio: string
    img: string
    fecha: string
    banda: string
    bandaImg: string;
    idx?: number;
}