import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; 
//ASSETS
import AddIcon from "../assets/images/img1.jpg";

const ImageBox = ({ imageIndex, handleImages }) => {
  const [avatar, setAvatar] = React.useState(null);
  const handleChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => setAvatar(e.target.result));
    reader.removeEventListener("load", (e) => setAvatar(e.target.result));
    handleImages(e.target.files[0], imageIndex);
  };

  return (
    <Box component="label" title="add photo" sx={style.ImageContainer}>
      <Box
        component="img"
        alt="add image icon"
        src={avatar ?? AddIcon}
        sx={avatar ? style.ImageAvatar : style.ImageDefault}
      />
      <input
        onChange={(e) => handleChange(e)}
        hidden
        type="file"
        accept="image/jpeg"
      />
    </Box>
  );
};
const AddImage = ({ setImages }) => {
  //   const [images, setImages] = React.useState([]);
  const [imageCount, setImageCount] = React.useState(1);
  const handleImageCount = () => {
    setImageCount((prevState) => prevState + 1);
  };
  const handleImages = (file, imageIndex) => {
    setImages((prevImages) => {
      let temp = prevImages;
      temp[imageIndex] = file;
      return temp;
    });
  };
  return (
    <Grid container rowSpacing={2} sx={style.container}>
      {[...Array(imageCount)].map((value, index) => (
        <Grid item xs={3} sx={style.item}>
          <ImageBox
            key={index}
            imageIndex={index}
            handleImages={handleImages}
          />
        </Grid>
      ))}
    </Grid>
  );
};
const style = {
  container: {
    width: "100%",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addMoreButton: {
    height: { xs: "60px", sm: "100px" },
    width: { xs: "60px", sm: "100px" },
    display: "flex",
    alignItems: "center",
    mx: "5px",
  },
  ImageContainer: {
    height: { xs: "60px", sm: "100px" },
    width: { xs: "60px", sm: "100px" },
    border: "5px solid #3C176B",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  ImageDefault: {
    // height: "40px",
    width: { xs: "20px", sm: "40px" },
  },
  ImageAvatar: {
    height: { xs: "60px", sm: "100px" },
    width: { xs: "60px", sm: "100px" },

    borderRadius: "10px",
  },
};
export default AddImage;
