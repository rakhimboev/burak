console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", (e) => {
    const selectedValue = $(".product-collection").val();
    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $("#product-volume").show();
    } else {
      $("#product-collection").show();
      $("#product-volume").hide();
    }
  });
  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display", "none");
  });

  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display", "flex");
  });

  $(".new-product-status").on("change", async (e) => {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();
    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productStatus: productStatus,
      });
      console.log("response: " + response);
      const result = response.data;
      if (result.data) {
        console.log("Product updated successfully!");
        $(".new-product-status").blur();
      } else alert("Product status update failed!");
    } catch (err) {
      alert("Product status update failed!");
    }
  });
});

function validateForm() {
  const productName = $(".product-name").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();
  const productStatus = $(".product-status").val();
  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details!");
    return false;
  }
}

function previewFileHandler(input, order) {
  const imgClassName = input.className;

  const file = $(`.${imgClassName}`).get(0).files[0];
  const fileType = file["type"];
  const validImageType = ["image/jpeg", "image/jpg", "image/png"];
  if (!validImageType.includes(fileType)) {
    alert("Please upload only jpeg, jpg, or png images!");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
