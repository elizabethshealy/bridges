<h1>Bridge Detail</h1>

<ul class="bridge-detail">
  <% _.pairs(m).forEach(function (field) { %>
    <li>
      <%- field[0] %>
      <%- field[1] %>
    </li>
  <% }) %>
</ul>
