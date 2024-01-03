import { NextResponse } from "next/server";
import mockData from "../../mockData";

export const GET = (request, {params}) => {
    const large = params.slug.length
    const {Post} = mockData
    
    if(large == 1){
      return NextResponse.json(Post.filter(e => e.categories == params.slug[large - 1]))
    }else if(large == 2){
        return NextResponse.json(Post.filter(e => {
            return e.categories == params.slug[large - 2] && e.type == params.slug[large-1]
        }))
    }else{
      return NextResponse.json({
        message: "No data"
      });
    }


 
}