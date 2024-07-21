using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
// CORS ekleyin
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());
});

// Servisler eklenir (AddControllers, AddHttpClient, AddAuthorization vb.)
builder.Services.AddControllers();

var app = builder.Build();

// Middleware kullanımı
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

// CORS kullanın
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
