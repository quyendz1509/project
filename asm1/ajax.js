var cate_icon = document.querySelector("#list-icon-cate-home");

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-type": "application/json" },
  responseType: "json",
});

const userApi = {
  getCategogries(params) {
    const url = "categogries";
    return axiosClient.get(url, { params });
  },
};
var str;
const fetch_categogries = async () => {
  try {
    let responsvie = await userApi.getCategogries();
    str = responsvie.data;
  } catch (erro) {
    console.log(erro);
  }
};

fetch_categogries()
  .then(() => {
    var cate_item = "";
    str.forEach((element) => {
      cate_item += `<div class="owl-item active mb-2" style="width: 223.333px; margin-right: 10px;"><div class="item">
                <div class="woo_category_box border_style rounded">
                  <div class="woo_cat_thumb">
                    <a href="/"><img src="${element.icon}" class="img-fluid" alt=""></a>
                  </div>
                  <div class="woo_cat_caption">
                    <h4><a href="search-sidebar-4.html">${element.name}</a></h4>
                  </div>
                </div>
              </div></div>`;
    });
    cate_icon.innerHTML = cate_item;
  })
  .catch((err) => {
    cate_icon.innerHTML += "Không thể kết nối tới server";
    console.log(err);
  });
