$(document).on("turbolinks:load", function() {
    $(".delete-user-btn").on("click", function(e) {
      e.preventDefault();
      var url = $(this).attr("href");
      if (confirm("Are you sure? This action cannot be undone.")) {
        $.ajax({
          url: url,
          type: "DELETE",
          dataType: "json",
          success: function(response) {
            if (response.success) {
              alert("User deleted successfully.");
              // Recargar la página o redirigir a otra URL después de eliminar el usuario
              // window.location.reload(); // Recargar la página
              // window.location.href = "/"; // Redirigir a la página de inicio, por ejemplo
            } else {
              alert("Failed to delete user.");
            }
          },
          error: function(xhr, status, error) {
            console.error("Error deleting user:", error);
          }
        });
      }
    });
  });
  