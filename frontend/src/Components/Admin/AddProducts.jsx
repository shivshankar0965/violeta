import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import cat from "./cat.json";
import BreadCrumbUtils from "../../utils/BreadCrumb";
import Headings from "./Headings";
import { addProducts } from "../../redux/admin/admin.actions";
const AddProducts = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();
  // const [images, setImages] = useState([]);
  const [productData, setProductData] = useState({
    images: [],
    name: "",
    price: "",
    description: "",
    category: "",
    subcat1: "",
    subcat2: "",
    strikedPrice: "",
    offer: "",
    freeGift: "",
    stock: "",
  });
  const addImageHandler = () => {
    // setImages([...images, { url: imageUrl }]);
    setProductData({
      ...productData,
      images: [...productData.images, { url: imageUrl }],
    });
    setImageUrl("");
  };

  const changeHandler = (e) => {
    let { name, value, type } = e.target;
    setProductData({
      ...productData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const links = [
    {
      title: "dashboard",
      link: "/admin/dashboard",
    },
    {
      title: "add products",
      link: "/admin/addproduct",
    },
  ];
  const submitHandler = () => {
    dispatch(addProducts(productData));
    toast({
      title: "Product created.",
      description: "We've created product for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    window.location.reload(false);
  };
  const {
    name,
    images,
    price,
    category,
    description,
    subcat1,
    offer,
    freeGift,
    stock,
    strikedPrice,
  } = productData;

  let category1 = cat.category.filter((el) => el.title === category);
  let category2 = category1.filter(
    (v, i, a) =>
      a.findIndex((v2) => ["title", "subCat1"].every((k) => v2[k] === v[k])) ===
      i
  );
  let category3 = category1.filter((el) => el.subCat1 === subcat1);
  return (
    <>
      <Box ml={"8"}>
        <Box maxW={"md"}>
          <BreadCrumbUtils data={links} />
        </Box>
        <Headings title={"Add Product"} />

        <Box mx="auto" mt="6" maxW={"70%"}>
          <FormControl display={"flex"} flexDir={"column"} gap={"6"}>
            <Box>
              <FormLabel>Product Name</FormLabel>
              <Input
                name="name"
                onChange={changeHandler}
                value={name}
                placeholder="Product name"
                type="text"
              />
            </Box>
            <Box>
              <FormLabel>Product Price</FormLabel>
              <Input
                name="price"
                onChange={changeHandler}
                value={price}
                placeholder="Product price"
                type="number"
              />
            </Box>
            <Box>
              <FormLabel>Striked Price</FormLabel>
              <Input
                name="strikedPrice"
                onChange={changeHandler}
                value={strikedPrice}
                placeholder="Product price"
                type="number"
              />
            </Box>
            <Box>
              <FormLabel>Product Description</FormLabel>
              <Textarea
                name="description"
                onChange={changeHandler}
                value={description}
                placeholder="Product description..."
              ></Textarea>
            </Box>
            <Box>
              <FormLabel>Product Category</FormLabel>
              <Select
                name="category"
                onChange={changeHandler}
                placeholder="Category"
              >
                <option value="makeup">Makeup</option>
                <option value="skin_care">Skin Care</option>
                <option value="hair_care">Hair Care</option>
                <option value="men">Men</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Product Sub Category-1</FormLabel>
              <Select
                name="subcat1"
                onChange={changeHandler}
                placeholder="Select Category-1"
              >
                {category2.map((el, i) => (
                  <option
                    style={{ textTransform: "capitalize" }}
                    key={i}
                    value={el.subCat1}
                  >
                    {el.subCat1.split("_").join(" ")}
                  </option>
                ))}
              </Select>
            </Box>
            <Box>
              <FormLabel>Product Sub Category-2</FormLabel>
              <Select
                name="subcat2"
                onChange={changeHandler}
                placeholder="Select Category-2"
              >
                {category3.map((el, i) => (
                  <option
                    style={{ textTransform: "capitalize" }}
                    text
                    key={i}
                    value={el.subCat2}
                  >
                    {el.subCat2.split("_").join(" ")}
                  </option>
                ))}
              </Select>
            </Box>
            <Box>
              <FormLabel>Offer </FormLabel>
              <Input
                name="offer"
                onChange={changeHandler}
                value={offer}
                placeholder="offer"
                type="number"
              />
            </Box>
            <Box>
              <FormLabel>Free Gift </FormLabel>
              <Input
                name="freeGift"
                onChange={changeHandler}
                value={freeGift}
                placeholder="Free gift vouchers"
                type="number"
              />
            </Box>
            <Box>
              <FormLabel>Stock </FormLabel>
              <Input
                name="stock"
                onChange={changeHandler}
                value={stock}
                placeholder="stock"
                type="number"
              />
            </Box>
            <Box>
              <FormLabel>Image Url</FormLabel>
              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image url"
                type="text"
              />
              <Button onClick={addImageHandler} mt="4" variant={"outline"}>
                Add Url
              </Button>
              <Box my="4" flexWrap={"wrap"} gap="4" display="flex">
                {images.map((el, i) => (
                  <Box shadow={"md"} width={"120px"} key={i}>
                    <Image width="100%" src={el.url} />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Button onClick={submitHandler} width={"100%"} variant={"solid"}>
                Add Product
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default AddProducts;
