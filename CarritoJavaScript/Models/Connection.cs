using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

namespace CarritoJavaScript.Models
{
    public class Connection
    {
        public static SqlConnection Connect()
        {
            string connectionString = "DATA SOURCE = A; INITIAL CATALOG = CarritoCompras; INTEGRATED SECURITY = YES;";
            SqlConnection sqlConnection = new SqlConnection(connectionString);
            return sqlConnection;
        }
    }
}