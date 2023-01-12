// components imported from packages
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';

// components imported from custom files
import Tags from '../Components/Tags';
import { db } from '../firebase';

// CSS components
import './Pages.scss';

const Detail = ({setActive}) => {

  const {id} = useParams();

  // All states
  const [blog,setBlog] = useState(null);
  const [tags,setTags] = useState([]);
  

  useEffect(()=>{
    const getBlogsData = async() =>{
      const blogRef = collection(db,"blogs");
      const blogs= await getDocs(blogRef);
      let tags=[];
      blogs.docs.map((doc)=>tags.push(...doc.get("tags")));
      let uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
    };
    getBlogsData();
  },[]);

  useEffect(()=>{
    id && getBlogDetail();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const getBlogDetail = async () =>{
    const docRef = doc(db, "blogs",id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setActive(null);
  } 

  return (
    <div className="single">
      <div className="blog-title-box" style={{backgroundImage: `url('${blog?.imgUrl}')`}}>
        <div className="overlay">
          <div className="blog-title">
            <span>{blog?.timestamp.toDate().toDateString()}</span>
            <h2>{blog?.title}</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid pb-4 pt-4 padding blog-single-content">
        <div className="container padding">
          <div className="row mx-0">
            <div className="col-md-8">
              <span className="meta-info text-start text-white">
                By <p className="author">{blog?.author}</p>
                {" - "+blog?.timestamp.toDate().toDateString()}
              </span>
              <p className="text-start">{blog?.description}</p>
            </div>
            <div className="col-md-3">
              <Tags tags={tags}/>
              <h2>Category</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail