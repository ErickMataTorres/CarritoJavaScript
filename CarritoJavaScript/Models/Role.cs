using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace CarritoJavaScript.Models
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set;}
        public char Administrator{ get; set;}

        public static List<Role> RolesList()
        {
            SqlConnection connection = Models.Connection.Connect();
            SqlCommand command = new SqlCommand("spListaRoles", connection);
            command.CommandType = CommandType.StoredProcedure;
            List<Role> list=new List<Role>();
            Role c;
            connection.Open();
            SqlDataReader dr;
            dr=command.ExecuteReader();
            while (dr.Read())
            {
                c= new Role();
                c.Id = int.Parse(dr["Id"].ToString());
                c.Name = dr["Nombre"].ToString();
                c.Administrator = char.Parse(dr["Administrador"].ToString());
                list.Add(c);
            }
            dr.Close();
            connection.Close();
            return list;
        }
    }
}