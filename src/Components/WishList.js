import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import { App } from "../Firebase/config";
import Banner from "../Components/Banner";
import { AuthContext } from "../Store/AuthContext";

const WishList = () => {
  useEffect(() => {
    App.firestore()
      .collection("favourite")
      .where("userId", "==", user.uid)
      .get()
      .then((snapshot) => {
        const allPosts = snapshot.docs.map((pet) => {
          return { ...pet.data(), id: pet.id };
        });
        setPets(allPosts);
      });
  }, []);
  const { user } = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const history = useHistory();
  console.log(pets);
  return (
    <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          <Banner />
          <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">
              {pets.map((pet) => (
                <div
                  key={pet.id}
                  onClick={() => {
                    history.push(`/pets:${pet.petId}`);
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

export default WishList;
