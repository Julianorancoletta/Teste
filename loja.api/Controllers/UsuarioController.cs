using Loja.Domain.Intefaces.Usuarios;
using Loja.Domain.Model.Usuarios;
using Loja.Data.Services.JwtBearerService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace loja.api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsuarioController : Controller
  {
    private readonly IUsuario _Usuario;

    public UsuarioController(IUsuario Usuario)
    {
      _Usuario = Usuario;
    }

    [HttpPost]
    [Route("login")]
    [AllowAnonymous]
    public IActionResult Login([FromBody] UsuarioLogin model)
    {
      if (!ModelState.IsValid)
        return BadRequest();

      var usuario = _Usuario.query(model);
      
      if (usuario == null)
        return Unauthorized();

      var token = TokenService.GenerateToken(usuario);
      Guid g = Guid.NewGuid();
      
      return Ok(new
      {
        usuario = UsuarioToDTO(usuario),
        token = token,
        chave = g
      });

    }

    // GET: api/Usuario
    //[HttpGet]
    // [Authorize]
    //public async Task<ActionResult<IEnumerable<UsuarioDTO>>> GetUsuarios()
    //{
    //  return await _context.Usuarios
    //          .Select(u => UsuarioToDTO(u))
    //          .ToListAsync();
    //}

    //// GET: api/Usuario/5
    //[HttpGet("{id}")]
    //[Authorize]
    //public async Task<ActionResult<UsuarioDTO>> GetUsuario(Guid id)
    //{
    //  var usuario = await _context.Usuarios.FindAsync(id);

    //  if (usuario == null)
    //  {
    //    return NotFound();
    //  }

    //  return UsuarioToDTO(usuario);
    //}

    // PUT: api/Usuario/5
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    //[HttpPut("{id}")]
    //[Authorize]
    //public async Task<IActionResult> PutUsuario(Guid id, Usuario usuario)
    //{
    //  if (id != usuario.Id)
    //  {
    //    return BadRequest();
    //  }

    //  // Ajustar
    //  // if (UsuarioEmailExists(usuario.Email))
    //  //     return BadRequest();

    //  //_context.Entry(usuario).State = EntityState.Modified;

    //  try
    //  {
    //    await _context.SaveChangesAsync();
    //  }
    //  catch (DbUpdateConcurrencyException)
    //  {
    //    if (!UsuarioExists(id))
    //    {
    //      return NotFound();
    //    }
    //    else
    //    {
    //      throw;
    //    }
    //  }

    //  return CreatedAtAction("GetUsuario", new { id = usuario.Id }, UsuarioToDTO(usuario));
    //}

    // POST: api/Usuario
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPost]
    [AllowAnonymous]
    public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
    {
      if (!ModelState.IsValid)
        return BadRequest();

      if (_Usuario.UsuarioEmailExists(usuario.Email))
        return BadRequest();

      await _Usuario.PostUsuario(usuario);

      return CreatedAtAction("GetUsuario", new { id = usuario.Id }, UsuarioToDTO(usuario));
    }

    // DELETE: api/Usuario/5
    //[HttpDelete("{id}")]
    //[Authorize]
    ////public async Task<ActionResult<Usuario>> DeleteUsuario(Guid id)
    ////{
    ////  var usuario = await _context.Usuarios.FindAsync(id);
    ////  if (usuario == null)
    ////  {
    ////    return NotFound();
    ////  }
    ////  usuario.Senha = "";

    ////  _context.Usuarios.Remove(usuario);
    ////  await _context.SaveChangesAsync();

    ////  return usuario;
    ////}

    //private bool UsuarioExists(Guid id)
    //{
    //  return _context.Usuarios.Any(u => u.Id == id);
    //}

    private static UsuarioDTO UsuarioToDTO(Usuario usuario) =>
    new UsuarioDTO
    {
      Id = usuario.Id,
      Nome = usuario.Nome,
      Email = usuario.Email
    };
  }
}

