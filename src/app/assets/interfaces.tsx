interface BannerProps {
    bannerImage: string
}

interface CaptionProps{
    captionText: string
}

interface bannerSongProps{
    bannerUrl: string
}

interface IconProps{
    iconClass: string
}

interface navProps {
    children?: React.ReactNode; 
}

interface SongTitleProps {
    titleSong: string
}

interface FigureProps{
    bannerUrl: string,
    bannerImage: string,
    playlist_title: string
}

interface NavListProps{
    children?: React.ReactNode,
    visibility: boolean
}

interface SongListParams {
    playlist_id: string
}

interface images {
    height: number,
    width: number,
    url: string
}

interface ArtistInfo {
    name: string,
    id: string
}

interface AlbumInfo {
    id: string,
    name: string,
    images: images[]
}

interface TrackInfo {
    artists: ArtistInfo[],
    name: string,
    album: AlbumInfo,
    id: string,
    external_urls: ExternalsUrls;
}

interface ExternalsUrls{
    spotify: string,
}

interface SongInfoInt{
    track: TrackInfo
}

interface Owner {
    display_name: string,
    uri: string,
}
  
interface Url {
    height: string,
    url: string,
    width: string
}
  
interface PlayListProps{
    playlist_name: string,
    playlist_id: string,
    playlist_image: Url,
    playlist_description: string,
    ownerInfo:Owner;
}
  
interface PlayList {
    description: string,
    id: string,
    images: Url[],
    name: string,
    owner: Owner
}

type TParams = {id: string};

export type{
    BannerProps,
    CaptionProps,
    bannerSongProps,
    IconProps,
    navProps,
    SongTitleProps,
    FigureProps,
    NavListProps,
    SongInfoInt,
    SongListParams,
    PlayListProps,
    PlayList,
    TParams
}