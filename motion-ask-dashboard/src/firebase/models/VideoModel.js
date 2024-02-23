export function VideoModel({
                               id,
                               title=null,
                               description=null,
                               creator=null,
                               content=null,
                               poster=null,
                               duration=null,
                               transcription_ready = false,
                           }){
    return {
        id:id,
        title: title,
        description: description,
        creator: creator,
        content: content,
        poster: poster,
        duration: duration,
        transcription_ready: transcription_ready
    }
}