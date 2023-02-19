import NotificationsNone from '@mui/icons-material/NotificationsNone';
import { borderColor, borderRadius, color, fontWeight } from '@mui/system';
import React from 'react'
import profileImage from "../../images/profile_img.png";
import styled from "styled-components";

function MyPageProfile() {

  const name = "호갱"; //임시 변수
  const email = "maninhat@kakao.com"; //임시 변수

  const Style={
    Wrapper:styled.div`
        margin-top: 200px;
        margin-bottom: 112px;
    `,
    ProfileImage:styled.img`
        width: 222px;
        height: 222px;
    `,
    ProfileIntro:styled.div`
        color: #C3C3C3;
        font-size: 15px;
        font-weight: bold;
        font-family: 'Inter';
        margin-top: 22px;
    `,
    ProfileImageButton:styled.label`
        width: 177px;
        height: 36px;
        background-color: #FADA5E;
        color: #FFFFFF;
        border-radius: 30px;
        line-height: 36px;
        font-size: 13px;
        font-weight: bold;
        font-family: 'Inter';
        margin-top: 22px;
        &:focus,
        &:hover {
            background-color: #FFBE0A;
            color: #FFFFFF;
        };
    `,
    HorizonLine:styled.hr`
        width: 890px;
        color: #BOBOBO;
        margin-top: 48px;
    `,
    DirectionTxt:styled.div`
        color: #5D5D5D;
        text-align: left;
        font-size: 18px;
        font-family: 'Inter';
    `,
    ProfileWrapper:styled.form`
        width: 890px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
    `,
    ItemWrapper:styled.div`
        margin-top: 22px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
    `,
    Question:styled.div`
        font-size: 20px;
        font-weight: bold;
        font-family: 'Inter';
    `,
    Answer:styled.input`
        width: 264px;
        height: 42px;
        color: #1F1F1F;
        border: 1px solid #B0B0B0;
        border-radius: 10px;
        font-family: 'Inter';
        &::placeholder {
            color: #1F1F1F;
        };
        &:focus {
            outline: none;
            border: 3px solid #FADA5E;
        }
    `,
    ItemButton:styled.button`
        width: 142px;
        height: 42px;
        background-color: #FADA5E;
        color: #464646;
        border-radius: 10px;
        border: 1px solid #B0B0B0;
        line-height: 40px;
        font-size: 15px;
        font-weight: bold;
        font-family: 'Inter';
        &:focus,
        &:hover {
            background-color: #FFBE0A;
            color: #FFFFFF;
        };
    `,
    ModifyButton:styled.button`
        width: 906px;
        height: 68px;
        background: #FADA5E;
        border: 1px solid #D0D0D0;
        border-radius: 30px;
        margin-top: 48px;
        font-size: 20px;
        color: #010101;
        font-weight: bold;
        font-family: 'Noto Sans KR';
        &:focus,
        &:hover {
            background-color: #FFBE0A;
            color: #FFFFFF;
        };
    `
    
  }

  return(
    <>
        <Style.Wrapper>
            <Style.ProfileImage src={profileImage}></Style.ProfileImage>
            <Style.ProfileIntro>
                <span style={{color: "#000000"}}>{name} </span> 
                님<br />오늘은 어떤 공모전에 참여하시나요?
            </Style.ProfileIntro>

            <Style.ProfileImageButton>
                프로필 사진 변경
            </Style.ProfileImageButton>
            <input
                type="file"
                id="ProfileImg"
                accept="image/*"
                style={{display: "none"}}
            />

            <Style.HorizonLine/>
            
            <Style.DirectionTxt>
                프로필 수정 후 수정 완료 버튼을 반드시 눌러주세요
            </Style.DirectionTxt>
            
            <Style.ProfileWrapper>
                <Style.ItemWrapper>
                    <Style.Question>계정</Style.Question>
                    {email}
                </Style.ItemWrapper>
                
                <Style.ItemWrapper>
                    <Style.Question>닉네임</Style.Question>
                    <Style.Answer placeholder='호갱'></Style.Answer>
                    <Style.ItemButton>중복 확인</Style.ItemButton>
                </Style.ItemWrapper>
                
                <Style.ItemWrapper>
                    <Style.Question>휴대전화</Style.Question>
                    <Style.Answer placeholder="01012345678"></Style.Answer>
                </Style.ItemWrapper>
                
                <Style.ItemWrapper>
                    <Style.Question>재학 중 대학</Style.Question>
                    <Style.Answer placeholder="한국대학교"></Style.Answer>
                    <Style.ItemButton>검색하기</Style.ItemButton>
                </Style.ItemWrapper>
                
                <Style.ItemWrapper style={{display: "flex"}}>
                    <Style.Question style={{flex:1}}>한줄 소개</Style.Question>
                    <Style.Answer 
                        placeholder="안녕하세요 만나서 반갑습니다! 좋은 자료 많이 공유할게요!"
                        style={{
                            width: "700px",
                            height: "90px",
                            flex: 2.1
                        }}
                    ></Style.Answer>
                </Style.ItemWrapper>
            </Style.ProfileWrapper>

            <Style.ModifyButton>수정 완료</Style.ModifyButton>

        </Style.Wrapper>
    </>
  )
}

export default MyPageProfile