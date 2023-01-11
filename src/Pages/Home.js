import Tags from '../Components/Tags';
import BlogSection from '../Components/BlogSection'
import React, {useState, useEffect} from 'react';
import {collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner';
import Category from '../Components/Category';

const Home = ({setActive, user}) => {
  const [blogs,setBlogs]=useState([]);
  const [tags,setTags]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const unsub = onSnapshot(collection(db, "blogs"), (snapshot)=>{
      let list=[];
      let tags=[];
      snapshot.docs.forEach((doc)=>{
        list.push({id: doc.id, ...doc.data()})
        tags.push(...doc.get("tags"));
      });
      const uniqueTags = [...new Set(tags)];
      setTags(uniqueTags);
      setBlogs(list);
      setLoading(false);
      setActive("home");
    },(error)=>{
      console.log(error);
    });

    return ()=>{
      unsub();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setActive]);

  if(loading){
    return <Spinner/>
  }

  const handleDelete = async (id)=>{
    if(window.confirm("Are us sure you want to delete that blog")){
      try{
        await deleteDoc(doc(db,"blogs",id));
        toast.info("Blog deleted successfully");
      } catch (error){
        console.log(error);
      }
    }
  }

  console.log("blogs",blogs);

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0 ">
          <div className="col-md-8">
            <div className="blog-heading text-start py-2 mb-4 text-white">Daily Blogs</div>
            <BlogSection blogs={blogs} user={user} handleDelete={handleDelete}/>
          </div>
          <div className="col-md-3">
            <Tags tags={tags}/>
            <Category/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home