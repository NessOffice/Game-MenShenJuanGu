function WriteUserInfo()
{
	var fso, f, s;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	f = fso.OpenTextFile("../test.txt",8,true);
	f.WriteLine("filecontent");
	f.Close();
	alert('write user info ok');
}