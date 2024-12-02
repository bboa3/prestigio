import useStorage from "@/hooks/create/useStorage";
import { ContentBlock, Media, User, UserRole } from "@/types/schema"
import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";

interface Props {
  author: User
}

const AuthorInfo: React.FC<Props> = ({ author }) => {
  const { getUrl } = useStorage();

  return (
    <div className="blog-author">
      <div className="author-img">
        {
          author.profilePicture && (
            <Image
              src={getUrl(author.profilePicture)}
              alt={author.name || 'Autor'}
              width={100}
              height={100}
            />
          )
        }
      </div>
      <div className="media-body">
        <div className="author-top">
          <div>
            <h3 className="author-name">
              <Link href={`/autor/${author.id}`} className="text-inherit">
                {author.name}
              </Link>
            </h3>
            <span className="author-desig">{
              author.role === UserRole.AUTHOR ? 'Escritor' : 'Editor'
            }</span>
          </div>
          <div className="social-links">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <p className="author-text">{author.bio}</p>
      </div>
    </div>
  )
}

export default AuthorInfo;