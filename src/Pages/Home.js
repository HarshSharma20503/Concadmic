// components imported from custom files
import Tags from '../Components/Tags';
import BlogSection from '../Components/BlogSection'
import Spinner from '../Components/Spinner';
import Category from '../Components/Category';
import {db} from '../firebase';

// components imported from packages
import React, {useState, useEffect} from 'react';
import {collection, deleteDoc, doc, onSnapshot, getDocs, limit, query,orderBy,
  startAfter} from 'firebase/firestore';
import { toast } from 'react-toastify';

const Home = ({ setActive, user }) => {

  // All States
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [totalBlogs, setTotalBlogs] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setTotalBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [setActive]);

  useEffect(() => {
    getBlogs();
  }, [setActive]);

  const getBlogs = async () => {
    const blogRef = collection(db, "blogs");
    console.log(blogRef);
    const firstFour = query(blogRef, orderBy("title"), limit(4));
    const docSnapshot = await getDocs(firstFour);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
  };

  console.log("blogs", blogs);

  const updateState = (docSnapshot) => {
    const isCollectionEmpty = docSnapshot.size === 0;
    if (!isCollectionEmpty) {
      const blogsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs((blogs) => [...blogs, ...blogsData]);
      setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
    } else {
      toast.info("No more blog to display");
    }
  };

  const fetchMore = async () => {
    setLoading(true);
    const blogRef = collection(db, "blogs");
    const nextFour = query(
      blogRef,
      orderBy("title"),
      limit(4),
      startAfter(lastVisible)
    );
    const docSnapshot = await getDocs(nextFour);
    updateState(docSnapshot);
    setLoading(false);
  };



  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that blog ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Blog deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // category count
  const counts = totalBlogs.reduce((prevValue, currentValue) => {
    let name = currentValue.category;
    if (!prevValue.hasOwnProperty(name)) {
      prevValue[name] = 0;
    }
    prevValue[name]++;
    return prevValue;
  }, {});

  const categoryCount = Object.keys(counts).map((k) => {
    return {
      category: k,
      count: counts[k],
    };
  });

  console.log("categoryCount", categoryCount);

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <div className="col-md-8">
            <div className="blog-heading text-start py-2 mb-4 text-white">Daily Blogs</div>
            {blogs?.map((blog) => (
              <BlogSection
                key={blog.id}
                user={user}
                handleDelete={handleDelete}
                {...blog}
              />
            ))}
            <div className="load-more">
              <button className="btn btn-primary" onClick={fetchMore}>
                Load More
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <Tags tags={tags} />
            <Category catgBlogsCount={categoryCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
