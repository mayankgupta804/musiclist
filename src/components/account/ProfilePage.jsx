import React from 'react';

export default function ProfilePage(props) {
  const { match } = props;
  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
        This is the ProfilePage.This is the id that was passed: {match.params.id}
        </div>
        <aside className="col-sm-12 col-lg-4">
        This is the sidebar
        </aside>
      </div>
    </section>
  );
}
