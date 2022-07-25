import React, { useEffect, useState } from "react";
import AddImage from "../components/AddImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [objSubmit, setObjSubmit] = useState("");
  const [images1, setImages1] = useState("");
  const [images2, setImages2] = useState("");
  const [images3, setImages3] = useState("");
  const [isUploaded1, setIsUploaded1] = useState(false);
  const [isUploaded2, setIsUploaded2] = useState(false);
  const [isUploaded3, setIsUploaded3] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUploaded1 && isUploaded2 && isUploaded3) {
      navigate("/");
    }
  }, [isUploaded1, isUploaded2, isUploaded3]);

  const addImage1 = (key, e) => {
    setLoading(true);
    const formData = new FormData();

    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    e.preventDefault();
    axios({
      method: "post",
      url: `https://group3.altaproject.online/restaurants/upload`,
      data: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        if (key === 1) {
          setIsUploaded1(true);
        } else if (key === 2) {
          setIsUploaded2(true);
        } else if (key === 3) {
          setIsUploaded3(true);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">Upload Banner</h1>
        <div className="flex justify-center">
          <AddImage
            onChange={(e) => {
              setImages1(URL.createObjectURL(e.target.files[0]));
              handleChange(e.target.files[0], "resto_image_url");
            }}
            onSubmit={(e) => addImage1(1, e)}
            isUploaded={isUploaded1}
            image={images1}
          />
          <AddImage
            onChange={(e) => {
              setImages2(URL.createObjectURL(e.target.files[0]));
              handleChange(e.target.files[0], "resto_image_url");
            }}
            onSubmit={(e) => addImage1(2, e)}
            isUploaded={isUploaded2}
            image={images2}
          />
          <AddImage
            onChange={(e) => {
              setImages3(URL.createObjectURL(e.target.files[0]));
              handleChange(e.target.files[0], "resto_image_url");
            }}
            onSubmit={(e) => addImage1(3, e)}
            isUploaded={isUploaded3}
            image={images3}
          />
        </div>
      </div>
    </Layout>
  );
};

export default UploadImage;
