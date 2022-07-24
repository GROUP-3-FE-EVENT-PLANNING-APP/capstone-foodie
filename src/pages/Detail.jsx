import React from 'react';
import Layout from '../components/Layout';
import Map from '../components/Map';
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';
import CommentList from '../components/CommentList';
import CommentForms from '../components/CommentForms';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [ratingInput, setRatingInput] = useState();
  const navigate = useNavigate();

  const { detail_id } = params;

  let ishalal = data.category == 'halal';

  useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  function fetchData() {
    axios
      .get(`https://group3.altaproject.online/restaurants/${detail_id}`)
      .then((response) => {
        // handle success
        const { data } = response;
        setData(data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function fetchComments(props) {
    const { detail_id } = params;
    axios
      .get(`https://group3.altaproject.online/comments/${detail_id}`)
      .then((response) => {
        // handle success
        const { data } = response;
        setComments(data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    //.finally(() => setLoading(false));
  }

  const postComment = () => {
    setLoading(true);
    axios({
      method: 'post',
      url: `https://group3.altaproject.online/comments/${detail_id}`,
      data: {
        comment: commentInput,
        rating: Number(ratingInput),
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        console.log(res.data);
        fetchComments();
        fetchData();
        swal({
          title: 'Good job!',
          text: 'SUCCESS ADD COMMENT',
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const addToFavorite = () => {
    axios({
      method: 'post',
      url: `https://group3.altaproject.online/favourites/${detail_id}`,
      data: {
        id: { detail_id },
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        console.log(res.data);
        swal({
          title: 'Good job!',
          text: 'SUCCESS POST',
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 500) {
          swal({
            title: 'Failed to add!',
            text: 'Resto is already in your favourites list',
          });
        }
      });
  };

  const addToBooking = () => {
    navigate(`/booking/${detail_id}`);
  };

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        {/* detail image */}

        <div className="container px-5 mx-auto lg:px-20">
          <div className="grid-cols-3 px-5 py-5 space-y-2 lg:space-y-0 lg:grid lg:gap-3">
            <div className="w-full col-span-2 row-span-2 rounded">
              <img className="w-full h-full" src={data.resto_images[0].resto_image_url} alt="" />
            </div>
            <div>
              <img className="w-full h-full" src={data.resto_images[1].resto_image_url} alt="" />
            </div>
            <div>
              <img className="w-full h-full" src={data.resto_images[2].resto_image_url} alt="" />
            </div>
          </div>
          <div hidden={!ishalal}>
            <div className="flex justify-center h-8 w-full my-2 bg-[#6ED93C] rounded-full w-1/4">
              <span className="text-sm font-medium py-1 px-2 text-white align-middle">Halal</span>
            </div>
          </div>
          <div hidden={ishalal}>
            <div className="flex justify-center h-8 w-full my-2 bg-red-500 rounded-full w-1/4">
              <span className="text-sm font-medium py-1 px-2 text-white align-middle">Non Halal</span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="mx-5">
              <Button variant="outlined" color="error" onClick={() => addToFavorite()}>
                Favorite
              </Button>
            </div>

            <Button onClick={addToBooking} variant="contained">
              Book now
            </Button>
          </div>
          <div className="px-10 dark:text-white">
            <div className="pt-5 text-2xl font-medium">{data.resto_name}</div>
            <div className="text-sm font-light">{data.location}</div>
            <p class="mb-5  bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-gray-800 my-2">
              {data.rating.toFixed(1)} <AiFillStar />
            </p>
          </div>
          <div className="mb-5 lg:flex flex-row justify-center">
            {/* left side */}
            <div className="text-xl px-5 lg:pr-24 lg:pl-24 py-8 shadow-lg">
              Menu
              <img className="w-96 mb-5" src={data.menu_image_url} alt="" />
            </div>
            {/* right side */}
            <div className="shadow-lg px-5 lg:pl-24 lg:pr-24 py-8 dark:text-white">
              <div className="mb-5">
                <div className="text-xl">Fasilitas</div>
                <ul>
                  {data.facilities.map((item) => (
                    <li type="circle" className="text-sm">
                      {item.facility}
                    </li>
                  ))}
                </ul>
              </div>
              <div>Kapasitas Meja : {data.table_quota}</div>
              <div className="mb-5">Harga Booking : Rp. {data.booking_fee}</div>
              <div>
                <PlaceIcon />
                Location
                <div className="text-sm font-light">{data.location}</div>
                <Map name={data.resto_name} latitude={data.latitude} longitude={data.longitude} />
              </div>
            </div>
          </div>
          {/* comment */}
          <div>
            <CommentForms onCommentChange={(e) => setCommentInput(e.target.value)} onRatingChange={(e) => setRatingInput(e.target.value)} submitComment={() => postComment()} />
            {comments.map((comments, index) => (
              <CommentList key={index} comment={comments.comment} name={comments.name} avatar={comments.avatar_url} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
};

export default Detail;
