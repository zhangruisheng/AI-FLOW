import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rightPanel}>
      <div className={styles.actionBar}>
        <img src="../image/mln899kw-x3ib53v.svg" className={styles.adjustIcon} />
        <img src="../image/mln899kw-khjjfhe.svg" className={styles.iconContainer} />
        <div className={styles.deleteIcon}>
          <img src="../image/mln899kw-wk2ipmd.svg" className={styles.icon} />
        </div>
      </div>
      <div className={styles.rightPanelContent}>
        <div className={styles.resultTitle}>
          <p className={styles.resultTitleText}>生成结果</p>
        </div>
        <div className={styles.frame}>
          <div className={styles.imageContainer}>
            <img
              src="../image/mln899l7-rin8br5.png"
              className={styles.a6091456641810306730}
            />
          </div>
          <div className={styles.imageContainer2}>
            <img
              src="../image/mln899l7-wrb2qg8.png"
              className={styles.a6091456641810306730}
            />
          </div>
          <div className={styles.imageContainer2}>
            <img
              src="../image/mln899l7-wrb2qg8.png"
              className={styles.a6091456641810306730}
            />
          </div>
        </div>
        <img
          src="../image/mln899l7-zy96yd8.png"
          className={styles.a60914566418103067302}
        />
        <div className={styles.actionBar2}>
          <img src="../image/mln899kw-x3ib53v.svg" className={styles.adjustIcon} />
          <img
            src="../image/mln899kw-khjjfhe.svg"
            className={styles.iconContainer}
          />
          <div className={styles.deleteIcon}>
            <img src="../image/mln899kw-wk2ipmd.svg" className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.promptInput}>
          <div className={styles.container}>
            <p className={styles.addImageText}>提示词补充：</p>
            <div className={styles.textArea}>
              <p className={styles.promptPlaceholder}>
                &#123;"portrait_prompt":&#123;"subject":&#123;"description":"Based
                on &#60;User Portrait&#62;, a young woman lying on white sofa, seen
                from directly above, relaxed lazy pose, looking up at
                camera","features":&#123;"hair":"Messy tousled hair spread on sofa
                cushion","expression":"Relaxed, slightly tired, intimate late-night
                vibe"&#125;,"pose":"Lying on back on sofa, one hand reaching down to
                touch her heel still on her foot, fingers hooked on the back of her
                high heel about to slip it off, other hand resting near her head or
                in her hair, legs slightly bent, the moment of taking off
                shoes"&#125;,"attire":&#123;"type":"Based on user-uploaded clothing
                reference","details":["Black blazer dress","Sheer black
                stockings","Heels removed and held in hand"],"color":"As per
                clothing reference"&#125;,"composition":&#123;"shot_type":"Top-down
                overhead shot, full body visible","focal_length":"28-35mm wide
                angle, compact camera","camera_angle":"Directly overhead, bird's eye
                view, looking straight down","camera_height":"Standing directly over
                subject","framing":"Subject fills frame diagonally, some sofa and
                floor visible around edges, casual snapshot
                framing","aspect_ratio":"9:16"&#125;,"lighting":&#123;"type":"Direct
                on-camera flash, harsh and unflattering","direction":"From camera
                position straight down","mood":"Hard flash creating harsh highlights
                on skin and fabric, distinct shadow cast on sofa beneath subject,
                flash reflection in eyes, overexposed hot spots on forehead and
                cheekbones"&#125;,"color_palette":&#123;"film_simulation":"CCD
                compact camera with flash","style":"Early 2000s point-and-shoot
                digital camera, direct flash, high ISO noise, warm incandescent
                ambient mixed with cool flash, slightly muddy colors","tones":["Cool
                flash on skin","Warm ambient in shadows","Blown
                highlights"],"grade_notes":["highlight: BLOWN OUT, clipped whites on
                skin and sofa","shadow: warm ambient light visible in
                corners","contrast: harsh from flash, deep blacks where flash
                doesn't reach","noise: VISIBLE high ISO digital noise, color noise
                in shadows","sharpness: slightly soft, compact camera lens
                quality","flash falloff: bright center, darker
                edges"]&#125;,"environment":&#123;"setting":"Hotel room interior,
                nighttime","background":"White sofa, marble floor partially visible,
                window with city lights or curtains in background, indoor ambient
                warm lighting mixed with flash","atmosphere":"Late night, private
                moment, after-party vibe"&#125;,"mood":"Intimate snapshot, late
                night hotel room, caught on compact camera with flash, raw and
                unpolished","technical_tags":["top-down overhead shot","direct
                on-camera flash","CCD compact camera","high ISO digital
                noise","visible noise grain","blown highlights","harsh flash
                lighting","early 2000s digital photo","point-and-shoot
                aesthetic","NOT professional","candid
                snapshot"],"character_reference":"Based on user-uploaded character
                reference","clothing_reference":"Based on user-uploaded clothing
                reference","negative_prompt":"professional studio lighting, softbox,
                natural light only, side lighting, rim light, no flash, perfectly
                exposed, no noise, clean image, magazine editorial, too polished, AI
                look, plastic skin"&#125;&#125;
              </p>
            </div>
          </div>
          <div className={styles.container5}>
            <div className={styles.optionsContainer}>
              <div className={styles.option}>
                <div className={styles.icon3}>
                  <img
                    src="../image/mln899kw-p0ccyy0.svg"
                    className={styles.icon2}
                  />
                </div>
                <p className={styles.optionText}>Gemini 2.5 Flash (最新免费)</p>
                <img
                  src="../image/mln899kx-pnop9cq.svg"
                  className={styles.frame2}
                />
              </div>
              <div className={styles.container3}>
                <p className={styles.quantityText}>数量</p>
                <div className={styles.container2}>
                  <p className={styles.quantityButton}>1</p>
                  <div className={styles.button}>
                    <p className={styles.quantityButton2}>2</p>
                  </div>
                  <p className={styles.quantityButton3}>4</p>
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.container4} />
                <p className={styles.ratioText}>1:1</p>
              </div>
            </div>
            <div className={styles.button3}>
              <img
                src="../image/mln899kx-y0sdv1q.svg"
                className={styles.interfaceFavoriteSta}
              />
              <p className={styles.generateText}>生成</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
