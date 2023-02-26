import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
const BreadCrumbUtils = ({ data }) => {
  return (
    <Breadcrumb
      borderTop={"1px solid #d9cad4"}
      borderBottom={"1px solid #d9cad4"}
      borderRadius={"md"}
      padding={"4"}
      fontWeight="medium"
      fontSize="sm"
    >
      {data &&
        data.map((obj, i) => (
          <BreadcrumbItem key={i}>
            <BreadcrumbLink textTransform={"capitalize"} href={obj.link}>
              {obj.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  );
};

export default BreadCrumbUtils;
