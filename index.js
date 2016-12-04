window.onload = function() {
  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
  script.onload = script.onreadystatechange = function() {
    $(document).ready(function() {
      $("#app_logo").val("Hello, World!");
      // .hc-left-sidebar-col
    //  width: 100%
    });
  };
  document.body.appendChild(script);
};
