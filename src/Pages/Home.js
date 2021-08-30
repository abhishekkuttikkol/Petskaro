import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import Sidebar from "../Components/Sidebar";
import { App } from "../Firebase/config";
import { PostContext } from "../Store/PostContext";
import Banner from "../Components/Banner"

const Home = () => {
  useEffect(() => {
    App.firestore()
      .collection("pets")
      .get()
      .then((snapshot) => {
        const allPosts = snapshot.docs.map((pet) => {
          return { ...pet.data(), id: pet.id };
        });
        setPets(allPosts);
      });
  }, []);
  const { setPets, pets } = useContext(PostContext);
  const history = useHistory()

  return (
    <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <Sidebar />
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          <Banner/>
          <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">
              {pets.map((pet) => (
                <div
                  onClick={() => {
                    history.push(`/pets:${pet.id}`)
                  }}
                  class="w-full sm:w-1/2 xl:w-1/3"
                >
                  <Posts pet={pet} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
