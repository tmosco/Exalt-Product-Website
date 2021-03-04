import {posts} from '../../../data/data';


export default function handler({query:{id}}, res){
   const filtered = posts => posts.id === id}

   if(filtered.length > 0){
       res.status(200).filtered[0]
   }
   else{res.status(404).json({message:`Post with the id of ${id} is not found`})}
