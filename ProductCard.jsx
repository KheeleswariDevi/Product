import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button, Input } from "reactstrap";

const ProductCard = ({
  id,
  image,
  title,
  price,
  variants = [],
  stockByVariant = {},
  onAddToCart,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState(
    variants.length > 0 ? variants[0].id : null
  );

  const inStock = selectedVariantId ? stockByVariant[selectedVariantId] > 0 : false;

  const handleVariantChange = (e) => {
    setSelectedVariantId(parseInt(e.target.value));
  };

  return (
    <Card className="shadow-sm border-0 h-100 text-center" style={{ minWidth: "250px" }}>
      <div className="ratio ratio-1x1">
        <img
          src={image}
          alt={title}
          className="card-img-top img-fluid"
          style={{ objectFit: "contain", padding: "1rem" }}
        />
      </div>
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h6" className="mb-2 text-truncate">{title}</CardTitle>
        <p className="fw-bold mb-3">${price}</p>

        {variants.length > 0 && (
          <Input
            type="select"
            value={selectedVariantId}
            onChange={handleVariantChange}
            className="mb-3"
          >
            {variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.name}
              </option>
            ))}
          </Input>
        )}

        <div className="mt-auto">
          <Link to={`/product/${id}`} className="btn btn-outline-dark btn-sm m-1">
            View
          </Link>
          <Button
            color="dark"
            size="sm"
            className="m-1"
            disabled={!inStock}
            onClick={() => {
              const selectedVariant = variants.find(v => v.id === selectedVariantId);
              onAddToCart(selectedVariant);
            }}
          >
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;