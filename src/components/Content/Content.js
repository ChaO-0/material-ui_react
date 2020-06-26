import React from "react";
import ContentCard from "./ContentCard";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <>
      <Grid style={{ paddingTop: 30 }} container spacing={4}>
        <Grid item sm={4} xs={12}>
          <ContentCard
            title="Ini IU"
            subtitle="$99.99"
            avatarSrc="https://inikpop.com/wp-content/uploads/2017/07/IU1.jpg"
            description="This is not a product. IU is love. IU is Life"
            imgSrc="https://inikpop.com/wp-content/uploads/2017/07/IU1.jpg"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentCard
            title="Ini JiEun"
            subtitle="$99.99"
            avatarSrc="https://news.ddtc.co.id/assets/images/view/200402031249iu.jpg"
            description="This is not a product. Jieun is love. Jieun is Life"
            imgSrc="https://news.ddtc.co.id/assets/images/view/200402031249iu.jpg"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentCard
            title="Ini IU lagi"
            subtitle="$99.99"
            avatarSrc="https://images.f2fcdn.net/files/71316906-201586727509005-2627778256960749734-n.jpg"
            description="This is not a product. IU is love. IU is Life"
            imgSrc="https://images.f2fcdn.net/files/71316906-201586727509005-2627778256960749734-n.jpg"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentCard
            title="Ini IU lagi, tapi pakai topi"
            subtitle="$99.99"
            avatarSrc="https://cdn2.tstatic.net/kaltim/foto/bank/images/penyanyi-kpop-iu-1.jpg"
            description="This is not a product. IU is love. IU is Life"
            imgSrc="https://cdn2.tstatic.net/kaltim/foto/bank/images/penyanyi-kpop-iu-1.jpg"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentCard
            title="Ini IU tapi rambutnya biru"
            subtitle="$99.99"
            avatarSrc="https://cdn.idntimes.com/content-images/community/2020/05/401ff37fb8d241f0bd50040e6ab4a11f-63e3f9d3751ef1bb1d29fb312d59c9af_600x400.jpg"
            description="This is not a product. IU is love. IU is Life"
            imgSrc="https://cdn.idntimes.com/content-images/community/2020/05/401ff37fb8d241f0bd50040e6ab4a11f-63e3f9d3751ef1bb1d29fb312d59c9af_600x400.jpg"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ContentCard
            title="Ini IU pake kacamata"
            subtitle="$99.99"
            avatarSrc="https://www.tagar.id/Asset/uploads2019/1588559048097-lee-ji-eun-alias-iu.jpg"
            description="This is not a product. IU is love. IU is Life"
            imgSrc="https://www.tagar.id/Asset/uploads2019/1588559048097-lee-ji-eun-alias-iu.jpg"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
