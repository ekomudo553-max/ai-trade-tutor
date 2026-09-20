"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import Link from "next/link";
export default function Login(){ const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setError("");const {error}=await createClient().auth.signInWithPassword({email,password}); if(error)setError(error.message); else window.location.href="/dashboard"; setBusy(false);}
return <main><div className="container" style={{maxWidth:520}}><div className="eyebrow">Welcome back</div><h1>Log in.</h1><form className="card" onSubmit={submit}><label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label><label>Password<input required type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>{error&&<p style={{color:'#ff9b9b'}}>{error}</p>}<button className="btn btn-primary" disabled={busy}>{busy?'Logging in…':'Log in'}</button><p className="muted">New here? <Link href="/signup">Create an account</Link></p></form></div></main>}