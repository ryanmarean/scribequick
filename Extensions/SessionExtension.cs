using System.Text.Json;
using Microsoft.AspNetCore.Http;

namespace ScribeQuick.Extensions
{
    public static class SessionExtension
    {
        public static void SetObjectAsJson (this ISession session, string key, object value)
        {
            session.SetString(key, JsonSerializer.Serialize(value));
        }
        public static T GetObjectFromJson<T> (this ISession session, string key)
        {
            string value = session.GetString(key);
            return value == null ? default(T) : JsonSerializer.Deserialize<T>(value);
        }
    }
}